import LogisticsCard from "./LogisticsCard";
import DeliveryPerformance from "./DeliveryPerformance";
import DeliveryExpectations from "./DeliveryExpectations";
import DeviatedRoute from "./DeviatedRoute";
import ErrorVehicles from "./ErrorVehicles";
import LateVehicles from "./LateVehicles";
import OnRoute from "./OnRoute";
import OrdersByCountries from "../eCommerce/OrdersByCountries";
import RouteVehicles from "./RouteVehicles";
import ShipmentStatistics from "./ShipmentStatistics";
import VehiclesOverview from "./VehiclesOverview";

const LogisticsBody: React.FC = () => {
    return (
      <div className="mx-auto  space-y-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative rounded-lg dark:bg-[#2F3349]">
            <LogisticsCard className="h-[140px]">
              <RouteVehicles/>
            </LogisticsCard>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative dark:bg-[#2F3349]">
            <LogisticsCard className="h-[140px]">
              <ErrorVehicles />
            </LogisticsCard>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative dark:bg-[#2F3349]">
            <LogisticsCard className="h-[140px]">
              <DeviatedRoute />
            </LogisticsCard>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative dark:bg-[#2F3349]">
            <LogisticsCard className="h-[140px]">
              <LateVehicles/>
            </LogisticsCard>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6 relative dark:bg-[#2F3349]">
            <LogisticsCard className="h-[405px]">
              <VehiclesOverview />
            </LogisticsCard>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 relative dark:bg-[#2F3349]">
                <LogisticsCard className="h-[405px]">
                  <ShipmentStatistics />
                </LogisticsCard>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative dark:bg-[#2F3349]">
                <LogisticsCard className="h-[504px]">
                  <DeliveryPerformance />
                </LogisticsCard>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative dark:bg-[#2F3349]">
                <LogisticsCard className=" p-6 h-[504px]">
                  <DeliveryExpectations />
                </LogisticsCard>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative dark:bg-[#2F3349]">
                <LogisticsCard className="h-[504px]">
              <OrdersByCountries />
                </LogisticsCard>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-12 relative dark:bg-[#2F3349]">
                <LogisticsCard className="h-[494px]">
                  <OnRoute />
                </LogisticsCard>
              </div>
      </div>
    );
  };
  
  export default LogisticsBody;
  