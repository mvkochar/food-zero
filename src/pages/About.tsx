import React from 'react'
import './css/About.css'
import Reservation from '../components/Reservation/Reservation'

type AboutProps = {
    setPageNum: (pageNum: number) => void
}

const About = ({ setPageNum }: AboutProps) => {
    React.useEffect(
        () => setPageNum(4), []
    )

    return (
        <>
            <section className='about-story d-f jc-sb'>
                <div>
                    <h2 className="about-story-title">Our Story</h2>
                    <p className="about-story-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                        Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                    </p>
                </div>
                <div><img src="/images/about-story.png" alt="about-story" /></div>
            </section>
            <section className='about-staff'>
                <div className="staff-bl-one d-f jc-sb">
                    <div>
                        <h3 className="about-staff-pos">Restuarant Manager</h3>
                        <div className="about-staff-name">Carson Hugn</div>
                        <div><img src="/images/staff1.png" alt="staff1" /></div>
                    </div>
                    <p className="about-staff-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Et in sed in pellentesque ornare nunc nisl.
                    </p>
                </div>
                <div className="staff-bl-two d-f jc-sb">
                    <p className="about-staff-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan,
                        ut parturient orci ac etiam congue mi.
                    </p>
                    <div>
                        <h3 className="about-staff-pos">Executive Chef</h3>
                        <div className="about-staff-name">Jane Cooper</div>
                        <div><img src="/images/staff2.png" alt="staff2" /></div>
                    </div>

                </div>
            </section>
            <section className='about-video'>
                <h2 className="about-video-title">It looks delicious</h2>
                <h5 className="about-video-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                <div><img src="/images/play.png" alt="play" /></div>
            </section>
            <section className="about-process">
                <h2 className="about-process-title text-center">Sophisticated Process</h2>
                <div className="about-process-content">
                    <div className="process-bl-one d-f jc-sb align-center">
                        <div><img src="/images/process1.png" alt="process1" /></div>
                        <div>
                            <h3 className="process-bl-title">01.Slice</h3>
                            <p className="process-bl-desc" style={{width: "616px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
                                imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis
                                pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
                            </p>
                        </div>
                    </div>
                    <div className="process-bl-two d-f jc-sb">
                        <div>
                            <h3 className="process-bl-title" style={{marginTop: "154px"}} >03.Bake</h3>
                            <p className="process-bl-desc" style={{width: "625px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                            </p>
                            <div style={{marginTop: "46px"}}><img src="/images/process3.png" alt="process3" /></div>
                        </div>
                        <div>
                            <div><img src="/images/process2.png" alt="process2" /></div>
                            <h3 className="process-bl-title" style={{marginTop: "46px"}}>02.Pickled</h3>
                            <p className="process-bl-desc" style={{width: "431px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Reservation/>
        </>
    )
}

export default About