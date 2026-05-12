import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import JobApplication from "@/models/JobApplication";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function GET() {
  try {
    await connectDb();
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, message: "Applications fetched successfully", data: applications },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDb();
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const profile = formData.get("profile");
    const qualification = formData.get("qualification");
    const expected_salary = formData.get("expected_salary");
    const last_organization = formData.get("last_organization");
    const last_salary = formData.get("last_salary");
    const experience = formData.get("experience");
    const address = formData.get("address");
    const image = formData.get("image");
    const resume = formData.get("resume");

    if (!name || !email || !phone || !qualification || !expected_salary || !last_organization || !last_salary || !experience || !address || !image || !resume) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const imageUrl = await uploadToCloudinary(image, "seglko/job-applications");
    const resumeUrl = await uploadToCloudinary(resume, "seglko/job-resumes");

    const application = await JobApplication.create({
      profile,
      name,
      email,
      phone,
      qualification,
      expected_salary,
      last_organization,
      last_salary,
      experience,
      address,
      image: imageUrl,
      resume: resumeUrl,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted successfully", data: application },
      { status: 201 }
    );
  } catch (error) {
    console.error("Job application error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application", details: error.message },
      { status: 500 }
    );
  }
}
