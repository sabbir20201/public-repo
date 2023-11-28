import SectionTitle from "../SectionTitle/SectionTitle";

const FAQ = () => {
    return (
        <div className="my-12 text-center bg-slate-400">
            <SectionTitle
            heading={"Frequently Asked Question"}
            subHeading={"Discover how our Polling and Survey App seamlessly integrates secure payments, offers customizable surveys, subscription plans, and prioritizes data privacy."}
            >
            </SectionTitle>
         
            <div className="flex justify-center">
                <div className="join join-vertical w-1/2 my-10">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Are there any subscription plans available?
                        </div>
                        <div className="collapse-content">
                            <p>Provide information about any subscription plans, their features, and pricing. Explain the benefits users get with a subscription.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can users create and distribute surveys for free?
                        </div>
                        <div className="collapse-content">
                            <p>Clarify if there are any free options for users to create and distribute surveys and if payment is required for specific features or advanced functionalities.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How are survey results and payment records stored and accessed?
                        </div>
                        <div className="collapse-content">
                            <p>Describe the data storage methods, security measures, and user access controls for survey results and payment records.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;