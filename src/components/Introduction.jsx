import logopsicotaoncombr from '../assets/logopsicotaoncombr.png';

const Introduction = () => {
    return (
        <>
            <img id='logo' src={logopsicotaoncombr} alt="Imagem circular com o nome do site e 
            um headset nas cores lilás, azul, branco e amarelo." />
            <h1>Seja bem-vinda(o)!</h1>
            <p>
                Este é um buscador idealizado para ser um ponto de referência para todos 
                aqueles que estejam a procura de serviços de saúde mental. 
                Aqui você encontra informações sobre clínicas-escolas e serviços públicos, 
                além de serviços similares que disponham de atendimento psicológico e/ou 
                psiquiátrico gratuitos ou a preços populares.
            </p>
        </>
    );
};

export default Introduction;