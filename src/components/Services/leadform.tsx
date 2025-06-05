"use client";

const LeadForm = () => {
  return (
    <form aria-label="lead-form" className="lead-form-container row">
      <h4>Fill out this form to get started</h4>
      <section className="col-12">
        <label htmlFor="name-lead-form">Name:</label>
        <input id="" type="text" placeholder="your'e Name" />
      </section>
      <section className="col-12">
        <label htmlFor="name-lead-form">Phone:</label>
        <input id="" type="text" placeholder="your'e Phone" />
      </section>
      <section className="col-12">
        <label htmlFor="name-lead-form">Email:</label>
        <input id="" type="text" placeholder="your'e Email" />
      </section>
      <section className="col-12">
        <button type="button">Send</button>
      </section>
    </form>
  );
};
export default LeadForm;
