

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl py-10">{heading}</h1>
            <h1 className="max-w-4xl mx-auto text-center">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;