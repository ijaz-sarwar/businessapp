import React from 'react'

function Elements2() {
    return (
        <div>
            <div className="page-header page-header-text-light bg-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Elements 2</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Elements 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header end */}
            {/* Content
            ============================================= */}
            <div id="content">
                <div className="container">
                    <div className="bg-light shadow-md rounded p-4 mb-4">
                        <div className="row">
                            <div className="col-sm-6">
                                {/* Typography
                      ============================================= */}
                                <h2 className="text-6 mb-3">Typography</h2>
                                <h1>H1 Heading. Lorem ipsum</h1>
                                <h2>H2 Heading. Lorem ipsum</h2>
                                <h3>H3 Heading. Lorem ipsum</h3>
                                <h4>H4 Heading. Lorem ipsum</h4>
                                <h5>H5 Heading. Lorem ipsum</h5>
                                <h6>H6 Heading. Lorem ipsum</h6>
                                {/* Typography End*/}
                                {/* Buttons
                      ============================================= */}
                                <h2 className="text-6 mb-3 mt-5">Buttons</h2>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary btn-sm">Small Button</button>
                                        <button type="button" className="btn btn-primary mx-2">Default Button</button>
                                        <button type="button" className="btn btn-primary btn-lg">Large Button</button>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button type="button" className="btn btn-outline-primary btn-sm shadow-none">Small Button</button>
                                        <button type="button" className="btn btn-outline-primary mx-2 shadow-none">Default Button</button>
                                        <button type="button" className="btn btn-outline-primary btn-lg shadow-none">Large Button</button>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button className="btn btn-primary btn-block" onclick>Block Button</button>
                                        <button className="btn btn-secondary btn-block" onclick>Block Button</button>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button type="button" className="btn btn-primary rounded-0">Rounded Square</button>
                                        <button type="button" className="btn btn-primary mx-2">Default</button>
                                        <button type="button" className="btn btn-primary rounded-pill">Rounded Pill</button>
                                    </div>
                                </div>
                                {/* Buttons End*/}
                            </div>
                            <div className="col-sm-6">
                                {/* Blockquote
                      ============================================= */}
                                <h2 className="text-6 mb-3">Blockquote</h2>
                                <blockquote>
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus.</p>
                                    <footer className="blockquote-footer">Ipsum dolor sit</footer>
                                </blockquote>
                                {/* Blockquote End*/}
                                <div className="row mt-5">
                                    <div className="col-sm-6">
                                        {/* Unordered
                          ============================================= */}
                                        <h2 className="text-6 mb-3">Unordered</h2>
                                        <ul className="simple-ul">
                                            <li>Lorem ipsum dolor amet</li>
                                            <li>Consectetur adipiscing elit </li>
                                            <li>Donec eros tellus </li>
                                            <li>Nullam ac nisi non eros gravida venenatis
                                    <ul>
                                                    <li>Libero massa dapibus dui, eu</li>
                                                    <li>Celerisque nec, rhoncus eget</li>
                                                    <li>Praesent vitae dui</li>
                                                    <li>Ut euismod, turpis sollicitudin</li>
                                                </ul>
                                            </li>
                                            <li>Dolor sit amet, consectetuer</li>
                                            <li>Vehicula venenatis, tempor vitae</li>
                                            <li>Fermentum posuere lectus</li>
                                            <li>Maecenas eu enim in lorem</li>
                                        </ul>
                                        {/* Unordered End*/}
                                    </div>
                                    <div className="col-sm-6">
                                        {/* Ordered
                          ============================================= */}
                                        <h2 className="text-6 mb-3">Ordered</h2>
                                        <ol>
                                            <li>Lorem ipsum dolor amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>Donec eros tellus </li>
                                            <li>Nullam ac nisi non eros gravida</li>
                                            <li>Libero massa dapibus dui, eu</li>
                                            <li>Celerisque nec, rhoncus eget</li>
                                            <li>Praesent vitae dui</li>
                                            <li>Ut euismod, turpis sollicitudin</li>
                                            <li>Ac tristique libero volutpat at</li>
                                            <li>Faucibus porta lacingilla vel</li>
                                            <li>Eget porttitor lorem</li>
                                            <li>Integer vel nibh sit amet</li>
                                        </ol>
                                        {/* Ordered End*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Highlights
                  ============================================= */}
                        <h2 className="text-center mt-5 mb-4">Highlights</h2>
                        <p>Lorem ipsum dolor sit amet,
                          <mark>consectetuer adipiscing</mark>
                          elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque,
                          <mark className="bg-primary text-white px-1">libero massa</mark>
                          dapibus dui, eu. Lorem
                          <mark className="bg-secondary text-white px-1">ipsum dolor</mark>
                          sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu. </p>
                        {/* Highlights End*/}
                        <h2 className="text-center my-4">Table</h2>
                        <div className="row">
                            <div className="col-md-6">
                                {/* Basic Table
                      ============================================= */}
                                <h4 className="text-5">Basic Table</h4>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Aaron</td>
                                                <td>Seth</td>
                                                <td>@aaron</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Daichi</td>
                                                <td>Barbal</td>
                                                <td>@daichi</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Tabor</td>
                                                <td>Guju</td>
                                                <td>@tabor</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Basic Table End*/}
                                {/* Striped Table
                      ============================================= */}
                                <h4 className="text-5">Striped Table</h4>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Aaron</td>
                                                <td>Seth</td>
                                                <td>@aaron</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Daichi</td>
                                                <td>Barbal</td>
                                                <td>@daichi</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Tabor</td>
                                                <td>Guju</td>
                                                <td>@tabor</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Striped Table End*/}
                            </div>
                            <div className="col-md-6">
                                {/* Bordered Table
                      ============================================= */}
                                <h4 className="text-5">Bordered Table</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Aaron</td>
                                                <td>Seth</td>
                                                <td>@aaron</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Daichi</td>
                                                <td>Barbal</td>
                                                <td>@daichi</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Tabor</td>
                                                <td>Guju</td>
                                                <td>@tabor</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Bordered Table End*/}
                                {/* Hover rows Table
                      ============================================= */}
                                <h4 className="text-5">Hover rows Table</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Aaron</td>
                                                <td>Seth</td>
                                                <td>@aaron</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Daichi</td>
                                                <td>Barbal</td>
                                                <td>@daichi</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Tabor</td>
                                                <td>Guju</td>
                                                <td>@tabor</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Hover rows Table End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Elements2
