import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="card w-full md:w-1/2 bg-base-100 shadow-xl mx-auto my-4">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoueKs3BYIznoZifrCEyGXyyBkhjeXGF3Nw&usqp=CAU" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is cors?</h2>
                    <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">DONE!</button>
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-1/2 bg-base-100 shadow-xl mx-auto my-4">
                <figure className="px-10 pt-10">
                    <img src="https://i.ytimg.com/vi/9bXhf_TELP4/maxresdefault.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>I use firebase authentication cause, Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        Top Alternatives to Firebase Authentication
                        Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications. ...
                        MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering. ...
                        Passport,Okta,
                        Firebase,
                        JSON Web Token,
                        Keycloak,
                        Amazon Cognito.
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">DONE!</button>
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-1/2 bg-base-100 shadow-xl mx-auto my-4">
                <figure className="px-10 pt-10">
                    <img src="https://media-exp1.licdn.com/dms/image/C5612AQHUplMGIv3KDg/article-cover_image-shrink_720_1280/0/1645382397748?e=2147483647&v=beta&t=RBikKY7lOJL9jtse2JFrHVpfEqARNInaivao3n77SbQ" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How does the private route works</h2>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">DONE!</button>
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-1/2 bg-base-100 shadow-xl mx-auto my-4">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RiKFo9KtzAs7k17H6fMtiHwl1OWdLlijNxmdXPm9eE7T56VmvFmlhw9JZNmDH1bX5jI&usqp=CAU" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">DONE!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;