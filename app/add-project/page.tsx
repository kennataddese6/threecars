'use client';
import { toast } from 'react-toastify';
import { useState, ChangeEvent } from 'react';
export default function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setProjectDescription] = useState('');
  const [image, setImage] = useState<string | undefined>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setImage(base64Image);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleClick = () => {
    setTitle('');
    setProjectDescription('');
    const data = {
      title,
      description,
      image,
    };
    const existingData = localStorage.getItem('project');
    let updatedData: any[] = [];
    if (existingData) {
      const sale = JSON.parse(existingData);
      updatedData = [...sale, data];
    } else {
      updatedData = [data];
    }
    localStorage.setItem('project', JSON.stringify(updatedData));
    toast.success('Success');
  };
  return (
    <>
      <div
        className="container d-flex align-items-center"
        style={{ height: '100vh' }}
      >
        <div className="card w-100">
          <div className="card-header">
            <h3>Add New Project</h3>
          </div>
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="projectTitle">Project Title</label>
              <input
                type="text"
                className="form-control"
                id="projectTitle"
                placeholder="Enter project title"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="projectDescription">Project Description</label>
              <textarea
                className="form-control"
                id="projectDescription"
                rows={3}
                placeholder="Enter project description"
                onChange={e => setProjectDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="projectFile">Upload Project File</label>
              <input
                type="file"
                className="form-control-file"
                id="projectFile"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary px-4"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
