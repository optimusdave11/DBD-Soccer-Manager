import { ReactNode } from "react";

import "./FMLayout.css";

interface FMLayoutProps {

  children: ReactNode;

}

export default function FMLayout({

  children,

}: FMLayoutProps) {

  return (

    <main className="fm-layout">

      <div className="fm-layout-content">

        {children}

      </div>

    </main>

  );

}