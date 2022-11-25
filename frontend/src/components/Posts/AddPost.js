import React from "react";
import axios from "axios";

const AddPost = () => {
    const [caption, setCaption] = React.useState("");
    const [pic, setPic] = React.useState("");
    const [imageId, setImageId] = React.useState("");
    const postDetails = (pics) => {
        if (pics.type == "image/jpeg" || pics.type == "image/jpeg") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "notezipper");
            data.append("cloudName", "dh0qrddyt");
            fetch("https://api.cloudinary.com/v1_1/dh0qrddyt/upload", {
                method: "post",
                body: data,
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setPic(data.url.toString());
                    setImageId(data.public_id);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(pic);
        console.log(imageId);
        try {
            const { data } = await axios.post("/api/v1/post/upload", {
                caption,
                image: {
                    url: pic,
                    public_id: imageId,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <h1>Create new post</h1>
            <form onSubmit={submitHandler}>
                <div className="">
                    <label htmlFor="title">Caption</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter Caption"
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>
                <div className="">
                    <label>Upload Image</label>
                    <input
                        type="file"
                        className="form-control-file"
                        onChange={(e) => postDetails(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddPost;
