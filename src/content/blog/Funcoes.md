---

title: "Capítulo 1 — Funções (reestudo de cálculo)"
description: "Primeiro capítulo da série de reestudo de cálculo: entendimento intuitivo de funções e seus principais tipos."
pubDate: 2026-07-20
tags: ["calculo", "matematica", "funcoes"]
------------------------------------------

Esse é o capítulo 1 da série de artigos que irei escrever sobre cálculo. Estou revisando alguns conteúdos que considero importantes para os meus conhecimentos, e entre os mais importantes, cálculo está lá em cima com certeza.

---

## Capítulo 1: Funções

### O que é uma função?

Eu gosto de considerá-las como um sistema ou uma máquina que recebe um input/domínio (um valor de entrada) e transforma esse valor em um output/contradomínio (valor de saída).

Existem alguns tipos de funções diferentes, como funções reais, funções trigonométricas (seno, cosseno, tangente, cotangente, secante e cossecante), além de operações com funções (o que é bem importante).

Eu decidi separar esses tipos de funções em artigos diferentes. Neste artigo, iremos destrinchar funções de números reais.

---

### Exemplo simples

Primeiro, eu gostaria de dar um exemplo prático e simples de uma função real:

f(x) = x²

x      f(x)
-2     4
-1     1
0      0
1      1
2      4

Esses pontos gerados pela função são constantemente usados em planos cartesianos. Então, o gráfico nada mais é do que o conjunto desses pontos:

(-2, 4)
(-1, 1)
(0, 0)
(1, 1)
(2, 4)
...

![Gráfico da função x²](/images/grafico.png)

Uma forma mais formal de representar esse gráfico seria:

G_f = { (x, y) | y = x², x ∈ ℝ }

---

### Resumo

Uma função pode ser resumida assim:

Domínio
(valores que podem entrar)

↓

Função
(regra de cálculo)

↓

Contradomínio
(conjunto onde as saídas pertencem)

Por exemplo:

f(x) = 2x + 1

Entrada      Saída

0   ─────►   1
1   ─────►   3
2   ─────►   5
3   ─────►   7

---

## Principais tipos de funções (visão geral)

### Função Afim

f(x) = ax + b

* Representa uma reta
* "a" → inclinação
* "b" → onde corta o eixo y

Importante porque aparece muito em aproximações (derivadas mais pra frente).

---

### Função Polinomial

f(x) = aₙxⁿ + ... + a₁x + a₀

Exemplos:
x²
x³ - 2x + 1

Base de praticamente todo o cálculo.

---

### Função Racional

f(x) = P(x) / Q(x)

Exemplo:
f(x) = 1/x

Aqui você já introduz uma ideia muito importante: restrição de domínio (divisão por zero).

---

### Nota

Lembrando que existem diversos detalhes e exceções que eu não entrei aqui (como divisão por zero, funções com raízes, funções com frações, definições mais formais de funções afins, polinomiais, racionais, etc.).

Na matemática, sempre existem muitos casos diferentes e explicações mais profundas.

Se quiser se aprofundar mais nesse tópico em específico, recomendo o tópico 2.1 — Funções de uma variável real a valores reais, do livro Guidorizzi (Volume 1).

---

Esses tipos de funções vão aparecer constantemente nos próximos capítulos, principalmente quando começarmos a estudar limites e derivadas.
