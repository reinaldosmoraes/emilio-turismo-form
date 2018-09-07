import React from "react";

const SubmittedForm = props => {
    return (
        <div className="submitted-form">
            <h3 className="sub-title">Formulário Enviado com sucesso</h3>
            <p>Será gerado um orçamento e enviado para o email cadastrado em um prazo de 24h.</p>
            <p>Para dúvidas ou mais informações entre em contato com o email contato@emilioturismo.com.br 
            ou ligue para (21) 38513146 no horário comercial.</p>
            <p>Conheça a agência e tenha mais informações no nosso site <a href="https://emilioturismo.com.br/">www.emilioturismo.com.br</a>.</p>
        </div>
    );
};

export default SubmittedForm;
