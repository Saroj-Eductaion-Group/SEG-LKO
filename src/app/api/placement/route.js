import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Placement from "@/models/Placement";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function GET() {
  try {
    await connectDb();
    const placements = await Placement.find().sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, message: "Placements fetched successfully", data: placements },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Error fetching placements:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    await connectDb();
    const formData = await req.formData();

    const name = formData.get("name");
    const course = formData.get("course");
    const company = formData.get("company");
    const designation = formData.get("designation");
    const compensation = formData.get("compensation");
    const image = formData.get("image");

    if (!name || !course || !company || !designation || !compensation || !image) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const imageUrl = await uploadToCloudinary(image, "seglko/placements");

    const newPlacement = await Placement.create({
      name,
      course,
      company,
      designation,
      compensation: parseFloat(compensation),
      image: imageUrl,
    });

    return NextResponse.json(
      { success: true, message: "Placement created successfully", data: newPlacement },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating placement:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create placement", details: error.message },
      { status: 500 }
    );
  }
}
