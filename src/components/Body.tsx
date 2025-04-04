import  GeneralCard  from "./GeneralCard";

const Body: React.FC = () => {
  return (
    <div className=" mx-auto p-4 space-y-4">
      <div className="grid grid-cols-12 gap-4">
      <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
      <GeneralCard></GeneralCard></div> 
      <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
      <GeneralCard></GeneralCard></div> 
      <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
      <GeneralCard></GeneralCard></div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard></div>
          <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard></div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard></div>
          <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard></div>
          <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard></div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard></div>
          <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard></div>
      </div>
     
    </div>
  );
};

export default Body;
