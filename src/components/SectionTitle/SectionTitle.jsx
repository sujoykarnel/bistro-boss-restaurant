const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-4 md:w-4/12">
      <p className="text-yellow-500 mb-2 capitalize ">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-4 py-4 font-bold">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
