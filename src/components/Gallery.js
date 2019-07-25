import React from 'react'
import { PageConsumer } from './context'

const Gallery = () => {

    return (
        <PageConsumer>
            {
                context => {
                    if (!context.state.galleryImgs.length) return <div>Not found</div>


                    const gallery = context.state.galleryImgs.map(item =>
                        <div className='img-wrapper'>
                            <img src={item} alt={"restaurant gallery"} />
                        </div>
                    )
                    return (
                        <div className="gallery">
                            <h2>Gallery</h2>
                            <div className="img-box">
                                {gallery}
                            </div>
                        </div>
                    );
                }
            }

        </PageConsumer>
    )
}

export default Gallery;