import 'animate.css';

export default function ActivityComponent(){
    return (
        <section className="activity">
            <div className="first-div">
                <img src="images/logo.svg" alt="" className="logo animate__animated animate__backInDown" />
                <div>
                    <img src="images/icon-document.svg" alt="" className="document animate__animated animate__backInLeft" />
                    <img src="images/icon-folder.svg" alt="" className="folder animate__animated animate__backInUp"/>
                    <img src="images/icon-upload.svg" alt="" className="upload animate__animated animate__backInRight"/>
                </div>
            </div>
            <div className="second-div">
                <div>
                    <p className="used animate__animated animate__backInDown">You've used <span>815 GB</span> of your storage</p>
                    <div className="ball"></div>
                    <progress max="100" value="70">
                    </progress>
                    <div className="row-second animate__animated animate__backInUp">
                        <div>
                            <p>0 GB</p>
                        </div>
                        <div>
                            <p>1000 GB</p>
                        </div>
                    </div>
                </div>
                <div className="white-bg">
                    <div>
                        <h1>185 <span>gb left</span></h1>
                    </div>
                </div>
            </div>
        </section>
    )
}