export default function ActivityComponent(){
    return (
        <section className="activity">
            <div className="first-div">
                <img src="images/logo.svg" alt="" className="logo" />
                <div>
                    <img src="images/icon-document.svg" alt="" className="document" />
                    <img src="images/icon-folder.svg" alt="" className="folder"/>
                    <img src="images/icon-upload.svg" alt="" className="upload"/>
                </div>
            </div>
            <div className="second-div">
                <div>
                    <p className="used">You've used <span>815 GB</span> of your storage</p>
                    <div className="ball"></div>
                    <progress max="100" value="70">
                    </progress>
                    <div className="row-second">
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