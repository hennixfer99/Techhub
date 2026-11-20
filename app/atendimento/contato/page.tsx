'use client';

import { useState, FormEvent } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

type FormState = {
  nome: string;
  email: string;
  empresa: string;
  mensagem: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { nome: '', email: '', empresa: '', mensagem: '' };

export default function ContatoPage() {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): FieldErrors {
    const e: FieldErrors = {};
    if (values.nome.trim().length < 3) e.nome = 'Informe seu nome completo.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) e.email = 'Email inválido.';
    if (values.mensagem.trim().length < 10) e.mensagem = 'Mensagem muito curta.';
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
          { title: 'Fale Conosco', href: '/atendimento/contato' },
        ]}
      />
      <main className="page">
        <div className="container">
          <header className="page-header">
            <span className="scheme-tag">Por tarefa</span>
            <h1>Fale Conosco</h1>
            <p>
              Envie uma mensagem e retornaremos em até um dia útil. Para urgências, ligue
              diretamente para o nosso central de atendimento.
            </p>
          </header>

          {submitted && (
            <div className="notice">
              Mensagem enviada. Vamos entrar em contato pelo email informado.
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
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-field full">
                <label htmlFor="empresa">Empresa (opcional)</label>
                <input
                  id="empresa"
                  type="text"
                  value={data.empresa}
                  onChange={(e) => setData({ ...data, empresa: e.target.value })}
                />
              </div>

              <div className="form-field full">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  value={data.mensagem}
                  onChange={(e) => setData({ ...data, mensagem: e.target.value })}
                />
                <span className="hint">Mínimo de 10 caracteres.</span>
                {errors.mensagem && <span className="error">{errors.mensagem}</span>}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn">Enviar mensagem</button>
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
