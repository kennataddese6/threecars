export default function AddProject() {
  return (
    <>
      <div
        className="container d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card w-100">
          <div className="card-header">
            <h3>Add New Project</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="projectTitle">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="projectTitle"
                  placeholder="Enter project title"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="projectDescription">Project Description</label>
                <textarea
                  className="form-control"
                  id="projectDescription"
                  rows={3}
                  placeholder="Enter project description"
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="projectFile">Upload Project File</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="projectFile"
                />
              </div>
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
