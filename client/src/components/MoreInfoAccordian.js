const MoreInfoAccordian = (props) => {
    return (
        <section className="accordion " id="cardAccordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="cardAccordionHeadingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#card-${props.id}`}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        More Info
                    </button>
                </h2>
                <div
                    id={`card-${props.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby="cardAccordionHeadingOne"
                    data-bs-parent="#cardAccordion"
                >
                    <div className="accordion-body">
                        <p>{props.reply}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreInfoAccordian;
