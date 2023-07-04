import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            discover en Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            prontopia ias as asfhsf dsfhsdf sdhfdsf hdfshfg
            hdfjhjsf
            sdfjdfh sdfjhsdf sdjfsdjfh 
        </p>
        <Feed />
    </section>
  )
}

export default Home