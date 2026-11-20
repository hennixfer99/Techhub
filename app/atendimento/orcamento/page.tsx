'use client';

import { useState, FormEvent } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteNav } from '@/lib/sitemap';

type FormState = {
  nome: string;
  email: string;
  empresa: string;
  porte: string;
  servico: string;
  prazo: string;
  descricao: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  nome: '',
  email: '',
  empresa: '',
  porte: '',
  servico: '',
  prazo: '',
  descricao: '',
};

export default function OrcamentoPage() {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const servicos = siteNav.find((n) => n.slug === 'servicos');
  const servicoOptions = servicos?.children?.flatMap((parent) =>
    parent.children?.map((child) => ({
      value: `${parent.title} / ${child.title}`,
      label: `${parent.title} > ${child.title}`,
    })) ?? [],
  ) ?? [];

  function validate(values: FormState): FieldErrors {
    const e: FieldErrors = {};
    if (values.nome.trim().length < 3) e.nome = 'Informe seu nome completo.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) e.email = 'Email inválido.';
    if (values.empresa.trim().length < 2) e.empresa = 'Informe o nome da empresa.';
    if (!values.porte) e.porte = 'Selecione o porte.';
    if (!values.servico) e.servico = 'Selecione o serviço de interesse.';
    if (values.descricao.trim().length < 20) e.descricao = 'Descreva o projeto em pelo menos 20 caracteres.';
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
      setData(initial);
    }
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { title: 'Home', href: '/' },
          { title: 'Atendimento', href: '/atendimento' },
          { title: 'Solicitar Orçamento', href: '/atendimento/orcamento' },
        ]}
      />
      <main className="page">
        <div className="container">
          <header className="page-header">
            <span className="scheme-tag">Por tarefa</span>
            <h1>Solicitar Orçamento</h1>
            <p>
              Conte sobre o seu projeto. Com base nas informações abaixo, nossos
              consultores vão agendar uma reunião gratuita e emitir uma proposta
              personalizada.
            </p>
          </header>

          {submitted && (
            <div className="notice">
              Solicitação registrada. Vamos retornar em até um dia útil pelo email informado.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="nome">Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  value={data.nome}
                  onChange={(e) => setData({ ...data, nome: e.target.value })}
                />
                {errors.nome && <span className="error">{errors.nome}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email corporativo</label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="empresa">Empresa</label>
                <input
                  id="empresa"
                  type="text"
                  value={data.empresa}
                  onChange={(e) => setData({ ...data, empresa: e.target.value })}
                />
                {errors.empresa && <span className="error">{errors.empresa}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="porte">Porte da empresa</label>
                <select
                  id="porte"
                  value={data.porte}
                  onChange={(e) => setData({ ...data, porte: e.target.value })}
                >
                  <option value="">Selecione</option>
                  <option value="pequena">Pequena (até 50 colaboradores)</option>
                  <option value="media">Média (51 a 500 colaboradores)</option>
                  <option value="grande">Grande (acima de 500)</option>
                </select>
                {errors.porte && <span className="error">{errors.porte}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="servico">Serviço de interesse</label>
                <select
                  id="servico"
                  value={data.servico}
                  onChange={(e) => setData({ ...data, servico: e.target.value })}
                >
                  <option value="">Selecione</option>
                  {servicoOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.servico && <span className="error">{errors.servico}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="prazo">Prazo estimado</label>
                <select
                  id="prazo"
                  value={data.prazo}
                  onChange={(e) => setData({ ...data, prazo: e.target.value })}
                >
                  <option value="">Sem prazo definido</option>
                  <option value="urgente">Urgente (até 30 dias)</option>
                  <option value="curto">Curto (1 a 3 meses)</option>
                  <option value="medio">Médio (3 a 6 meses)</option>
                  <option value="longo">Longo (acima de 6 meses)</option>
                </select>
              </div>

              <div className="form-field full">
                <label htmlFor="descricao">Descrição do projeto</label>
                <textarea
                  id="descricao"
                  value={data.descricao}
                  onChange={(e) => setData({ ...data, descricao: e.target.value })}
                />
                <span className="hint">Fale brevemente sobre o problema, objetivo e restrições.</span>
                {errors.descricao && <span className="error">{errors.descricao}</span>}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn">Enviar solicitação</button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setData(initial);
                    setErrors({});
                    setSubmitted(false);
                  }}
                >
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
