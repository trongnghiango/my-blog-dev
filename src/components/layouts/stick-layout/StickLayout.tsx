import TpcHeader from "@/components/common/tpc-header/TpcHeader";
import { ReactNode } from "react";

interface IProps {
  title?: string;
  pageType?: string;
  children: ReactNode;
}

export default function StickLayout({ title, children }: IProps) {

  return (
    <>
      <div className="h-screen overflow-y-scroll">

        <div className="top__info flex flex-col bg-white">
          <div className="flex container mx-auto">
            {/* top info */}
            <TpcHeader />
          </div>
        </div>
        <header className={`top-0 left-0 right-0 h-[75px] w-full bg-[#464646] sticky
       backdrop-filter backdrop-blur-lg 
       px-4 py-2 shadow-2xl `}
        >
          <div className="flex items-center">
            {/* navbar */}

          </div>
        </header>
        <>
          {children}
        </>
      </div>
    </>
  );
}
StickLayout.displayName = 'StickLayout';