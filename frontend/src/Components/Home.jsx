import { Box, Button, Flex, Image } from "@chakra-ui/react"
import React from 'react'
import "../styles/Home.css"
const Home = () => {
  return (
    <div>
      <Box className="help">
        <p className="quest">Have a question? We can help.*_</p>
      </Box>
      {/* ....................big image...  */}
      <div>
        <Box className="bigImage">
          <img className="imm" width={"100%"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img0.jpg" />
          <p className="holiday">The <i>Holiday</i> Collection</p>
          <p className="holiday1">is here!</p>
          <p className="festive">No one does festive like we do...</p>
          <p className="shop"><u>Shop the new launch</u></p>
        </Box>
      </div>
      {/* ....................................... */}

      {/* .............small box........ */}
      <div>
        <Box className="nextbox">
          <img height={"250px"} width={"100%"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_gg_img0.jpg" />
          <p className="gift">The Gift Guide</p>
          <p className="herit">Great holiday presents are part of our heritage.</p>
          <p className="A2022">Here's our 2022 take...</p>
          <Box className="bb" height={"40px"} width={"75%"} marginLeft={"180px"} display={"flex"}
            justifyContent={"space-between"} >

            <Button className="shopp" width={"18%"}>Shop for her</Button>
            <Button className="shopp" width={"18%"}>Shop for him</Button>
            <Button className="shopp" width={"18%"}>Shop for girls</Button>
            <Button className="shopp" width={"18%"}>Shop for boys</Button>
            <Button className="shopp" width={"18%"}>Shop for the home</Button>

          </Box>
        </Box>
      </div>
      {/* .............twobox........... */}
      <div>
        <Box className="twobox">
          <Box className="first">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img1.jpg" />
            <p className="fair">Fair Isle forever</p>
            <p className="sweat"><u>Shop new sweaters</u></p>
          </Box>
          <Box className="second">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img2.jpg" />
            <p className="beThe">Be the</p>
            <p className="dressed">best-dressesd guest</p>
            <p className="visit"><u>Visit the Holiday Party Shop</u></p>
          </Box>
        </Box>
      </div>
      {/* .............twobox1........... */}
      <div>
        <Box className="twobox1">
          <Box className="first">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img3.jpg" />
            <p className="fair1">Coat Check</p>
            <p className="sweat1"><u>Shop parkas, topcoats & more</u></p>
          </Box>
          <Box className="second">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img4.jpg" />
            <p className="beThe1">Pj's all day</p>
            <p className="visit"><u>Shop flannel & more</u></p>
          </Box>
        </Box>
      </div>
      {/* .............twobox2........... */}
      <div>
        <Box className="twobox1">
          <Box className="first">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img5.jpg" />
            <p className="fair13">The shirts</p>
            <p className="fair3">of the season</p>
            <p className="sweat3"><u>Shop what's new</u></p>
          </Box>
          <Box className="second">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img6.jpg" />
            <p className="intro">Introducing The heritage duck boot</p>
            <p className="intro1">The heritage duck boot</p>
            <p className="visit1"><u>Shop new footwear</u></p>
          </Box>
        </Box>
      </div>
      {/* ........................................................................... */}

      <div>
        <Box className="Look">
        <img className="mid" src="https://www.jcrew.com/brand_creative/homepage2022/08-Aug2/2022aug_0802_hp_m_img1.jpg"/>
        </Box>
      </div>
    </div>
  )
}

export default Home