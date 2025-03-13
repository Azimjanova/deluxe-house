import React from 'react';
import './exclusiveDyzine.css'

const ExclusiveDyzine = () => {
    return (
            <div className={'exclusiveDyzine container justify-between'}>
                <div className={'images'}>
                    <img className={'img1'}
                         src="https://s3-alpha-sig.figma.com/img/1855/120d/75fc8d2b9183089378ecd045e54983f8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c8RaYv-k0iiQ7~AFybqHbA~uSv6AG4dSPB405YlEomqCFfQzJW8Gw5~PyAlMOje8e0fukW-nm68BTC3uoA986Rc-wTHyuI7ZzMc1SgjQJuTOa29Q7e78tsMMbkyGXf2CnEr8sOVLThAYY-AMhJpKIsne5vd5LTpDt1VP5ABLGcm8KxrapUFWwIw3OxqCvhg1j35ZUhpOwQg2zHluR-F39L~~hEoni56VcqsGXpSf7tpEdEiR2fyjgnWEx9-vbOVfRWXY4wP24vv1PxnL6P4mIOOTIPp1fixYLCGmqxarkAba5b4iLDRbXTZzO-9xte0ijipyqGarHUWepgMNS167~Q__"
                         alt=""/>
                    <img className={'img2'}
                         src="https://s3-alpha-sig.figma.com/img/8151/1565/06e51ebb5e2fd868b05d7466327b4c4c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=optcYX4t~S2K1F76~G~aDidbxVUTrpAseWqH8NxNm1aLmKOIAG4akeLoN2Tr7WrzeGBos-IJ-UkKUFQcnNyzbRHUEoS0FJb7HxpR~mGEaY4LEM0Uxz0pjnHt7esWgVO51Ch1zOwQAr-XIKQRlzUXWlYYOBv3PI~9XIZq56CUKimvFOr9CRyAfSKZXhwTKw2aM-QpLY1pPkua7TqIeLNWp0cU7F6r0AU93jcq3IRHqrcIEabos9IhryCfHm6J4IbGphdX5lcjWINfLeEIoD1pNA-fB8c4NI7NPoH6ZxXtzTaMR3C9pgT-e77fajZS968mb1ytIoWO8UCpaaCMAz2tog__"
                         alt=""/>
                </div>
                <div className={'eclusiveText'}>
                    <h4>Коллекция</h4>
                    <h1>Экслюзивный
                        Дизайн</h1>
                    <p>
                        Каждый проект дизайна интерьера разрабатывается нами индивидуально для каждого заказчика. Мы не
                        повторяем свои проекты и стараемся каждый проект делать непохожими на другие.
                        <br/>
                        При разработке дизайна мы учитываем все пожелания своих клиентов и всегда рады предложить свежие
                        идеи.
                    </p>
                </div>
            </div>
    );
};

export default ExclusiveDyzine;