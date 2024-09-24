import img from '../../../src/public/X.jpg';

type Props = {
    size: string,
}

export const Logo = ({size}: Props) => {
    return (
        <img src={img} alt="Logo" className={`w-${size}`} />
    )

}