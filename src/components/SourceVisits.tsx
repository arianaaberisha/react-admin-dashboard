import React from "react"

import Email from "../assets/icons/Email3.svg"
import Globe from "../assets/icons/Globe.svg"
import Link from "../assets/icons/CircleLink.svg"
import ExternalLink from "../assets/icons/ExternalLink.svg"
import Ad from "../assets/icons/Ad.svg"
import Star from "../assets/icons/Star..svg"

const SourceVisits: React.FC = () => {
  return (
    <div className="">
      <div className="py-2">
        <h2 className="text-lg font-medium text-[#2F2B3DE5]">Source Visits</h2>
        <p className="text-md text-gray-500">38.42k Visitors</p>
      </div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2 py-2">
          <img
            src={Link}
            alt="Direct Source"
            className="p-2 bg-gray-200 rounded-md mr-2 py-2"
          />
          <div>
            <div className="text-sm font-medium">Direct Source</div>
            <div className="text-xs text-gray-500">Direct link click</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">1.2k</span>
          <span className="w-16 h-6 flex items-center justify-center bg-green-100 rounded-md text-green-500 font-semibold">
            +4.2%
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src={Globe}
            alt="Social Network"
            className="p-2 bg-gray-200 rounded-md mr-2"
          />
          <div className="flex flex-col">
            <div className="text-sm font-medium">Social Network</div>
            <div className="text-xs text-gray-500">Social Channels</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 ">31.5k</span>
          <span className="w-16 h-8 flex items-center justify-center bg-green-100 rounded-md text-green-500 font-semibold">
            +8.2%
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src={Email}
            alt="Email Newsletter"
            className="p-2 bg-gray-200 rounded-md mr-2"
          />
          <div className="flex flex-col">
            <div className="text-sm font-medium">Email Newsletter</div>
            <div className="text-xs text-gray-500">Mail Campaigns</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-publicSans">893</span>
          <span className="w-16 h-6 flex items-center justify-center bg-green-100 rounded-md text-green-500 font-semibold">
            2.4%
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src={ExternalLink}
            alt="Referrals"
            className="p-2 bg-gray-200 rounded-md mr-2"
          />
          <div className="flex flex-col">
            <div className="text-sm font-medium">Referrals</div>
            <div className="text-xs text-gray-500">Impact Radius Visits</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-publicSans">342</span>
          <span className="w-16 h-6 flex items-center justify-center bg-red-100 rounded-md text-red-500 font-semibold">
            -0.4%
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src={Ad}
            alt="ADVT"
            className="p-2 bg-gray-200 rounded-md mr-2"
          />
          <div className="flex flex-col">
            <div className="text-sm font-medium">ADVT</div>
            <div className="text-xs text-gray-500">Google ADVT</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-publicSans">2.15K</span>
          <span className="w-16 h-6 flex items-center justify-center bg-green-100 rounded-md text-green-500 font-semibold">
            9.1%
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src={Star}
            alt="Other"
            className="p-2 bg-gray-200 rounded-md mr-2"
          />
          <div className="flex flex-col">
            <div className="text-sm font-medium">Other</div>
            <div className="text-xs text-gray-500">Many Sources</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-publicSans">12.5k</span>
          <span className="w-16 h-6 flex items-center justify-center bg-green-100 rounded-md text-green-500 font-semibold">
            +6.2%
          </span>
        </div>
      </div>
    </div>
  );
}

export default SourceVisits;
