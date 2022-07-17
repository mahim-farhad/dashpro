import React, { useState } from "react";

import FeatherIcon from "feather-icons-react";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [tool, setTool] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      title,
      description,
      tool,
      size,
      category,
      quantity,
      price,
    };

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setDescription("");
      setTool("");
      setSize("");
      setCategory("");
      setQuantity("");
      setPrice("");
      setError(null);

      console.log("New product added.");
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <section className="section section--overview">
          <div className="row">
            <div className="col--12">
              <div className="card card--form">
                <form onSubmit={handleSubmit}>
                  <div className="card__header">
                    <h5 className="mb-0">Add a new Products</h5>

                    <p className="text-sm mb-0">Showing the Products</p>
                  </div>

                  <div className="card__body">
                    <div className="row">
                      <div className="col--12 col--md-6 col--lg-4">
                        <div className="form-group">
                          <label className="form-group__label">Title</label>

                          <input
                            type="text"
                            className="form-group__input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col--12 col--md-6 col--lg-4">
                        <div className="form-group">
                          <label className="form-group__label">Category</label>

                          <select
                            className="form-group__input form-group__input--select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value="jersey">Jersey</option>
                            <option value="logo">Logo</option>
                            <option value="banner">Banner</option>
                          </select>
                        </div>
                      </div>

                      <div className="col--12 col--md-12 col--lg-4 gy--4 gy--md-4 gy--lg-0">
                        <div className="form-group">
                          <label className="form-group__label">Quantity</label>

                          <input
                            type="number"
                            className="form-group__input"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col--12 col--lg-6">
                        <div className="form-group">
                          <label className="form-group__label">
                            Description
                          </label>

                          <textarea
                            type="text"
                            className="form-group__input"
                            rows="6"
                            cols="10"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col--12 col--lg-6 gy--4 gy--md-4 gy--lg-0">
                        <div className="col--12 col--md-12">
                          <div className="form-group">
                            <label className="form-group__label">Tool</label>

                            <input
                              type="text"
                              className="form-group__input"
                              value={tool}
                              onChange={(e) => setTool(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col--12 col--md-12 mt-4">
                          <div className="form-group">
                            <label className="form-group__label">Size</label>

                            <select
                              className="form-group__input form-group__input--select"
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            >
                              <option value="small">small</option>
                              <option value="medium">medium</option>
                              <option value="large">large</option>
                              <option value="extra_large">extra large</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col--12 col--md-12 col--lg-4">
                        <div className="form-group">
                          <label className="form-group__label">Image</label>

                          <div className="form-group__inner-container">
                            <input
                              type="file"
                              className="form-group__input"
                              value={image}
                              onChange={(e) => setImage(e.target.value)}
                            />

                            <FeatherIcon
                              icon="image"
                              className="fe form-group__icon form-group__icon--trailing"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col--12 col--md-6 col--lg-4 gy--4 gy--md-4 gy--lg-0">
                        <div className="form-group">
                          <label className="form-group__label">Price</label>

                          <input
                            type="number"
                            className="form-group__input"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col--12 col--md-6 col--lg-4 gy--4 gy--md-4 gy--lg-0">
                        <div className="form-group">
                          <label className="form-group__label">Currency</label>

                          <select className="form-group__input form-group__input--select">
                            <option value="0">USD</option>
                            <option value="1">BDT</option>
                            <option value="2">INR</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col--12 col--md-6 col--lg-3">
                        <div className="form-group form-group--floating form-group--floating-outline">
                          <label className="form-group__label form-group__label--floating">
                            Facebook Handle
                          </label>

                          <input type="url" className="form-group__input" />

                          <i className="fa fa-facebook-square form-group__icon form-group__icon--trailing"></i>

                          <fieldset className="form-group__fieldset">
                            <legend className="form-group__legend">
                              <span>Facebook Handle</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                      <div className="col--12 col--md-6 col--lg-3 gy--4 gy--md-0">
                        <div className="form-group form-group--floating form-group--floating-outline">
                          <label className="form-group__label form-group__label--floating">
                            Instagram Handle
                          </label>

                          <input type="url" className="form-group__input" />

                          <i className="fa fa-instagram form-group__icon form-group__icon--trailing"></i>

                          <fieldset className="form-group__fieldset">
                            <legend className="form-group__legend">
                              <span>Instagram Handle</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                      <div className="col--12 col--md-6 col--lg-3 gy--4 gy--md-4 gy--lg-0">
                        <div className="form-group form-group--floating form-group--floating-outline">
                          <label className="form-group__label form-group__label--floating">
                            Behance Handle
                          </label>

                          <input type="url" className="form-group__input" />

                          <i className="fa fa-behance form-group__icon form-group__icon--trailing"></i>

                          <fieldset className="form-group__fieldset">
                            <legend className="form-group__legend">
                              <span>Behance Handle</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                      <div className="col--12 col--md-6 col--lg-3 gy--4 gy--md-4 gy--lg-0">
                        <div className="form-group form-group--floating form-group--floating-outline">
                          <label className="form-group__label form-group__label--floating">
                            Dribbble Handle
                          </label>

                          <input type="url" className="form-group__input" />

                          <i className="fa fa-dribbble form-group__icon form-group__icon--trailing"></i>

                          <fieldset className="form-group__fieldset">
                            <legend className="form-group__legend">
                              <span>Dribbble Handle</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card__footer w-100 d-flex mt-4">
                    <button
                      type="submit"
                      className="btn btn--contain-primary btn--extended w-20 mb-0 ms-auto"
                    >
                      Submit
                      <i
                        data-feather="arrow-right"
                        className="fe btn__icon btn__icon--trailing"
                      ></i>
                    </button>

                    {error && <p className="text-error">error</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AddProducts;
