"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fees")
      .then((res) => res.json())
      .then((data) => {
        setFees(data);
        setLoading(false);
      });
  }, []);

  return (
    <SidebarProvider className="dark">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <h2>Welcome Admin</h2>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Outstanding Fees</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="p-4 pt-0 text-white">
          <div className="bg-muted/50 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Outstanding Student Fees
            </h2>

            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-3">Student ID</th>
                    <th className="text-left py-2 px-3">Full Name</th>
                    <th className="text-left py-2 px-3">Total Paid (GHS)</th>
                    <th className="text-left py-2 px-3">
                      Outstanding Fee (GHS)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((student, i) => (
                    <tr key={i} className="border-b hover:bg-muted/20">
                      <td className="py-2 px-3">{student.student_id}</td>
                      <td className="py-2 px-3">{student.full_name}</td>
                      <td className="py-2 px-3 ">
                        GHS{" "}
                        {student.total_paid
                          ? student.total_paid.toFixed(2)
                          : "0.00"}
                      </td>
                      <td className="py-2 px-3 font-medium">
                        GHS{" "}
                        {student.outstanding_fee
                          ? student.outstanding_fee.toFixed(2)
                          : "0.00"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
