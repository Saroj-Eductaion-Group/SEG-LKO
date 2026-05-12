"use client";
import { AdminHeader } from "@/components/admin-header";
import StatCard from "@/components/stats-card";
import { useEffect, useState } from "react";

export default function Page() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Seglko Admin - Dashboard";
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/count");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <>
      <AdminHeader heading={"Dashboard"} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <StatCard
            title="Total Contact Enquiries"
            value={stats.totalContacts}
            loading={loading}
            linkHref="/admin/view-contact"
          />
          <StatCard
            title="Total Jobs Posted"
            value={stats.totalJobs}
            loading={loading}
            linkHref="/admin/view-job"
          />
          <StatCard
            title="Total Notices"
            value={stats.totalNotices}
            loading={loading}
            linkHref="/admin/view-notice"
          />
          <StatCard
            title="Total Placements"
            value={stats.totalPlacements}
            loading={loading}
            linkHref="/admin/view-student-placement"
          />
          <StatCard
            title="Placement Updates"
            value={stats.totalPlacementUpdates}
            loading={loading}
            linkHref="/admin/view-placement-update"
          />
        </div>
      </div>
    </>
  );
}
