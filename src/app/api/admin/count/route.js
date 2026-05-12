import connectDb from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import Job from "@/models/Job";
import Notice from "@/models/Notice";
import Placement from "@/models/Placement";
import PlacementUpdate from "@/models/PlacementUpdate";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();

    // Fetch all counts in parallel - much faster
    const [totalContacts, totalJobs, totalNotices, totalPlacements, totalPlacementUpdates] = await Promise.all([
      Contact.countDocuments(),
      Job.countDocuments(),
      Notice.countDocuments(),
      Placement.countDocuments(),
      PlacementUpdate.countDocuments(),
    ]);

    return NextResponse.json({
      totalContacts,
      totalJobs,
      totalNotices,
      totalPlacements,
      totalPlacementUpdates,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
