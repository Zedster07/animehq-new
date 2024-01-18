import { IonIcon } from "@ionic/react";
import { PlayIcon, PosterType1, PosterType1AddWatchListButton, PosterType1Details, PosterType1DetailsInfo, PosterType1Img, PosterType1PlayIconContainer, PostersType1Container, PostersType1ContainerSlider, PostersType1ContainerTitle } from "./PostersType1Styles";
import { playCircle, playCircleOutline, radioButtonOn, star } from "ionicons/icons";
import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'

const PostersType1 = ({title, posters}) => {
    const [emblaRef , emblaApi] = useEmblaCarousel({slidesToScroll:1})
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])
 // "https://animhq.com/wp-content/uploads/2024/01/metallic-rouge-886659320c.jpg"
const data =  [
    {
        image: "https://animhq.com/wp-content/uploads/2024/01/metallic-rouge-886659320c.jpg",
        title: "Metallic Rouge",
        seasons:2,
        year:2023,
        rating:9.12,
        categories:["درامة", "أكشن"]
    }
]
    return <PostersType1Container>
        <PostersType1ContainerTitle>{title}</PostersType1ContainerTitle>
        <div className="embla" ref={emblaRef}>
            <PostersType1ContainerSlider className="embla__container">
            {
                posters.map((item,index) => {
                    return <PosterType1 key={index} className="embla__slide">
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
        </div>
        
    </PostersType1Container>
}

export default PostersType1;