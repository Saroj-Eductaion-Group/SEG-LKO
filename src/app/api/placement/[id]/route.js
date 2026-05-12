import connectDb from "@/lib/dbConnect";
import Placement from "@/models/Placement";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function DELETE(request, { params }) {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    if (session.user.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { id } = await params;
    const placement = await Placement.findByIdAndDelete(id);
    if (!placement) return NextResponse.json({ success: false, message: "Placement not found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "Student Placement deleted successfully", data: placement });
  } catch (error) {
    console.error("Error deleting placement:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    if (session.user.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { id } = await params;
    const formData = await request.formData();
    const name = formData.get("name");
    const course = formData.get("course");
    const company = formData.get("company");
    const designation = formData.get("designation");
    const compensation = formData.get("compensation");
    const newImage = formData.get("image");

    const existingPlacement = await Placement.findById(id);
    if (!existingPlacement) return NextResponse.json({ success: false, message: "Placement not found" }, { status: 404 });

    let imagePath = existingPlacement.image;
    if (newImage && newImage.size > 0) {
      imagePath = await uploadToCloudinary(newImage, "seglko/placements");
    }

    const updatedPlacement = await Placement.findByIdAndUpdate(
      id,
      { name, course, company, designation, compensation, image: imagePath },
      { new: true }
    );

    return NextResponse.json({ success: true, message: "Placement updated successfully", data: updatedPlacement });
  } catch (error) {
    console.error("Error updating placement:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
