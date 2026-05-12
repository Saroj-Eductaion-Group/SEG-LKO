import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Notice from "@/models/Notice";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function DELETE(request, { params }) {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    if (session.user.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { id } = await params;
    const notice = await Notice.findByIdAndDelete(id);
    if (!notice) return NextResponse.json({ success: false, message: "Notice not found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "Notice deleted successfully", data: notice });
  } catch (error) {
    console.error("Error deleting notice:", error);
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
    const title = formData.get("title");
    const newImage = formData.get("image");

    const existingNotice = await Notice.findById(id);
    if (!existingNotice) return NextResponse.json({ success: false, message: "Notice not found" }, { status: 404 });

    let imagePath = existingNotice.image;
    if (newImage && newImage.size > 0) {
      imagePath = await uploadToCloudinary(newImage, "seglko/notices");
    }

    const updatedNotice = await Notice.findByIdAndUpdate(id, { title, image: imagePath }, { new: true });

    return NextResponse.json({ success: true, message: "Notice updated successfully", data: updatedNotice });
  } catch (error) {
    console.error("Error updating notice:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
