import React, { useState } from 'react'

export const ImageConverter = () => {

    const [image, setImage] = useState("");

    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);

        }
        reader.onerror = error => {
            console.log("Error : ", error);

        }
    }
    return (
        <>
            <h1 className='px-5 p-1 pt-5 text-light bg-dark'>Image to Binary Converter</h1>
            <div className='container px-5 mt-5 shadow'>
                <form>
                    <label className='form-label fw-bold'>Upload Image</label>
                    <input type='file' accept='image/*' placeholder='Choose Image' className='form-control p-2'
                        onChange={convertToBase64} />
                    <button type='submit' className='btn btn-success m-1'>Submit</button>
                </form>
            </div>
            <div className='container px-5 p-1 mt-5 shadow'>
                <h1>Uploaded Image is : </h1>
                {
                    image === "" || image === null ? "" : <img src={image} height={100} width={100} alt='img' />
                }
            </div>
        </>
    )
}
