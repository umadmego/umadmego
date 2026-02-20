
import photoLinks from "@/components/photoPage/photoLinks";
import Image from 'next/image';

const PhotoSection = () => {
    // Exemplo de um blurDataURL genérico. O ideal é gerar um para cada imagem.
    const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg==';

    return (
        <>
            <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-3'>
                Veja as fotos dos eventos
            </h2>
            <p className='text-lg lg:text-2xl text-center font-medium mb-[59px]'>
                Registramos os melhores momentos e queremos compartilhar com você
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                {photoLinks.map(({ day, link, preview }) => (
                    <a href={link} key={link} target='_blank' rel='noreferrer' className='block'>
                        <div className='border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
                            <Image 
                                src={preview} 
                                alt={day} 
                                width={400} 
                                height={300} 
                                className='w-full h-64 object-cover'
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                            />
                            <p className='text-center font-semibold p-3'>{day}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default PhotoSection;
