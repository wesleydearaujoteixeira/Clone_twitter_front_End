import Link from "next/link";
import Image from "next/image";


type Props = {
    width: number;
    height?: number;
}

export const Logo = ({width, height}: Props) => {
    return (
        <Link href="/">

            <Image 

            src={`/X.jpg`}
            alt="Twitter Logo" 
            width={width}
            height={height ?? width}
            quality={100}

            />
        
        </Link>
    )

}