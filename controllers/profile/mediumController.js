import axios from "axios";

const mediumController = async (req, res) => {

  var config = {
    method: 'get',
    url: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${req.query.mediumid}`,
  };

  axios(config)
    .then(function (response) {
      res.status(200).json({
        sucess:true,
        status:response.data.status,
        user:response.data.feed,
        posts:response.data.items,
      })
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({
        sucess: false ,
        message: "user not exist" 
      })
    });

}
export {
  mediumController
}