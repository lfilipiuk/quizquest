type LandingCardProps = {
    title?: string;
    subtitle?: string;
    image?: string;
    background?: string;
}


const LandingCard = ({ title, subtitle, background, image } : LandingCardProps) => {

    return (
        <div
            data-testid={"landing-card"}
            className={'bg-white rounded-lg block p-2'}>
            <div
                data-testid={'background-image'}
                className={`${background} rounded-lg p-3 h-60 flex items-center align-center`}>
                <img src={image}  alt={`quizquest promo image ${title}`} className={"object-contain w-full h-full"} />
            </div>
            <p className={'py-4 px-2 text-center text-lg'}><span>{title} </span>
            <span className={'text-slate'}>{subtitle}</span>
            </p>
        </div>
    );
}

export default LandingCard;