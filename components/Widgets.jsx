import React from "react";
import Image from "next/image";
import Moment from "react-moment";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const Widgets = ({ articles }) => {
  return (
    <div className="hidden xl:inline space-y-2">
      <div className="bg p-2.5 space-y-2 w-11/12 ">
        <div className="flex items-center justify-between text-sm font-bold">
          <p>Linkedin News</p>

          <InfoRoundedIcon />
        </div>

        {articles.slice(0, 5).map((article) => (
          <div key={article.url} className="flex items-center space-x-2 py-1">
            <FiberManualRecordRoundedIcon className="h-2 w-2" />

            <div>
              <p className="max-w-xs font-medium text-sm truncate pr-10">
                {article.title}
              </p>

              <p className="text-xs dark:text-white/75 opacity-80">
                <Moment fromNow date={article.publishedAt} />
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg w-11/12 h-64 sticky top-20">
        <div className="relative w-full h-full">
          <Image
            layout="fill"
            src="https://rb.gy/kbfeaa"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
