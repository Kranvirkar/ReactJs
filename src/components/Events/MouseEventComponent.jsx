import { useState } from "react"
import "./mouse.demo.css";

function MouseEventComponent() {
    const [photos] = useState(["b/5297078.jpg", "b/5338813.jpg", "b/5796576.jpg", "b/5807322.jpg", "b/6069078.jpg "]);
    const [preview, setPreview] = useState("");

    function handleMouseOver(e) {
        setPreview(e.target.src)
    }

    return (
        <div className="container-fluid">
            <section className="row mt-2">
                <nav className="col-2">
                    {
                        photos.map(photo =>
                            <div className="mb-2 p-1 border border-2 border-primary" style={{ width: '80px' }} key={photo}>
                                <img src={photo} onMouseOver={handleMouseOver} width="70" height="70" />

                            </div>
                        )
                    }
                </nav>
                <main className="col-10">
                    <img className="preview-image" width="570" height="570" src={preview} />
                </main>
            </section>
        </div >
    )
}

export default MouseEventComponent;