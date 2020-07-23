![alt text](https://github.com/JKannekens/kontent-custom-element-cloudinary/blob/master/src/data/assets/cloudinary-custom-element.gif "Cloudinary Assets Selector")

# Cloudinary asset selector for Kentico Kontent
This repository contains the source code of Cloudinary asset selector custom element for Kentico Kontent.

## Setup
1. Deploy the code to a secure public host
2. Follow the instructions in the Kentico Kontent documentation to add the element to a content model.
3. Configure the JSON parameters as detailed in the JSON Parameters section

## JSON Parameters
```
{
    "cloudName": "<YOUR CLOUD NAME>",
    "apiKey": "<YOUR API KEY>"
}
```
## Response
After selecting assets from Cloudinary these are returned in an array of assets.
For more information see: https://cloudinary.com/documentation/media_library_widget
```
{
  assets: [{
  "public_id": "sample",
  "resource_type": "image",
  "type": "upload",
  "format": "jpg",
  "version": 1511474034,
  "url": "http://res.cloudinary.com/demo/image/upload/v1511474034/sample.jpg",
  "secure_url": "https://res.cloudinary.com/demo/image/upload/v1511474034/sample.jpg",
  "width": 864,
  "height": 576,
  "bytes": 120257,
  "duration": null,
  "tags": [],
  "context": [],
  "created_at": "2017-11-23T21:53:54Z",
  "derived": [
    {
      "url": "http://res.cloudinary.com/demo/image/upload/c_scale,e_grayscale,f_auto,q_auto,w_100/v1511474034/sample.jpg",
      "secure_url": "https://res.cloudinary.com/demo/image/upload/c_scale,e_grayscale,f_auto,q_auto,w_100/v1511474034/sample.jpg"
    }
  ]
}]}
```
## Deploying
Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your GitHub account as well.
<br>
<br>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/JKannekens/kontent-custom-element-cloudinary" rel="nofollow"><img src="https://camo.githubusercontent.com/be2eb66bb727e25655f1dcff88c2fdca82a77513/68747470733a2f2f7777772e6e65746c6966792e636f6d2f696d672f6465706c6f792f627574746f6e2e737667" alt="Deploy to Netlify" data-canonical-src="https://www.netlify.com/img/deploy/button.svg" style="max-width:100%;"></a>
