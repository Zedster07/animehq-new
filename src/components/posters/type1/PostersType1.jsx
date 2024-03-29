import { IonIcon } from "@ionic/react";
import { PlayIcon, PosterType1, PosterType1AddWatchListButton, PosterType1Details, PosterType1DetailsInfo, PosterType1Img, PosterType1PlayIconContainer, PostersType1Container, PostersType1ContainerSlider, PostersType1ContainerTitle } from "./PostersType1Styles";
import { playCircle, playCircleOutline, radioButtonOn, star } from "ionicons/icons";
import React, { useEffect } from "react";

const PostersType1 = ({title, posters}) => {
    
 // "https://animhq.com/wp-content/uploads/2024/01/metallic-rouge-886659320c.jpg"

    return <PostersType1Container>
        <PostersType1ContainerTitle>{title}</PostersType1ContainerTitle>
            
            <PostersType1ContainerSlider>
            {
                posters.map((item,index) => {
                    return <PosterType1 key={index}>
                        <PosterType1Img bg={item.image} >
                            <PosterType1PlayIconContainer>
                                <PlayIcon icon={playCircleOutline} />
                            </PosterType1PlayIconContainer>
                            <PosterType1AddWatchListButton>
                                Add Watch List
                            </PosterType1AddWatchListButton>
                        </PosterType1Img>
                        <PosterType1Details>
                            <h1>{item.title}</h1>
                            <PosterType1DetailsInfo>
                                <span>{item.year}</span>
                                <IonIcon icon={radioButtonOn} style={{fontSize:"5px"}} />
                                <span>{item.rating}</span>
                                <IonIcon icon={star} style={{color:"rgba(238,167,66,1)"}} />
                            </PosterType1DetailsInfo>
                            <PosterType1DetailsInfo>
                                {item.categories.map((cat, index) => (
                                    <React.Fragment key={index}>
                                        <span>{cat}</span>
                                        {index !== item.categories.length - 1 && (
                                            <IonIcon icon={radioButtonOn} style={{ fontSize: "5px" }} />
                                        )}
                                    </React.Fragment>
                                ))}
                            </PosterType1DetailsInfo>
                        </PosterType1Details>
                    </PosterType1>
                })
            }

            </PostersType1ContainerSlider>
            <button className="prev" onClick={() => {}}>
                &#10094;
            </button>
            <button className="next" onClick={() => {}}>
                &#10095;
            </button>
    </PostersType1Container>
}

export default PostersType1;