#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <time.h>

void mostrarTabuleiro(char t[]) {
  printf("\n");
  printf("%c | %c | %c\n", t[0], t[1], t[2]);
  printf("--+---+--\n");
  printf("%c | %c | %c\n", t[3], t[4], t[5]);
  printf("--+---+--\n");
  printf("%c | %c | %c\n", t[6], t[7], t[8]);
  printf("\n");
};

int verificarVitoria(char t[]) {
  int v[8][3] = {
    {0,1,2}, {3,4,5}, {6,7,8},
    {0,3,6}, {1,4,7}, {2,5,8},
    {0,4,8}, {2,4,6}
  };

  for (int i = 0; i < 8; i++) {
    if (t[v[i][0]] == t[v[i][1]] && t[v[i][1]] == t[v[i][2]]) {
      return 1;
    }
  }
  return 0;
};

int verificarEmpate(char t[]) {
  for (int i = 0; i < 9; i++) {
    if (t[i] != 'X' && t[i] != 'O') {
      return 0;
    }
  }
  return 1;
};

void jogadaJogador(char t[], char simb) {
  int pos;
  do {
    printf("Escolha uma posição (%c): ", simb);
    scanf("%d", &pos);
    pos--;
    if (pos < 0 || pos > 8 || t[pos] == 'X' || t[pos] == 'O') {
      printf("Posição inválida. Tente novamente.\n");
    }
  } while (pos < 0 || pos > 8 || t[pos] == 'X' || t[pos] == 'O');
  t[pos] = simb;
};

void jogadaComputador(char t[], char simb) {
  int pos;
  do {
    pos = rand() % 9;
  } while (t[pos] == 'X' || t[pos] == 'O');
  printf("Computador jogou na posição %d\n", pos + 1);
  t[pos] = simb;
};

int sortearInicio() {
  return rand() % 2;
};

int main() {

  SetConsoleOutputCP(65001);
  system("cls");
  srand(time(NULL));

  char tabuleiro[9] = {'1','2','3','4','5','6','7','8','9'};
  char jogador1, jogador2;
  int modo, turno, venceu = 0, empatou = 0;

  printf("Jogar contra: 1 - Jogador | 2 - Computador: ");
  scanf("%d", &modo);

  printf("Jogador 1, escolha X ou O: ");
  scanf(" %c", &jogador1);

  if (jogador1 == 'X' || jogador1 == 'x') {
    jogador1 = 'X';
    jogador2 = 'O';
  } else {
    jogador1 = 'O';
    jogador2 = 'X';
  };

  turno = sortearInicio();

  if (modo == 1) {
    printf("Quem começa: %s\n", turno == 0 ? "Jogador 1" : "Jogador 2");
  } else {
    printf("Quem começa: %s\n", turno == 0 ? "Jogador 1" : "Computador");
  };

  while (!venceu && !empatou) {

    mostrarTabuleiro(tabuleiro);

    if (turno == 0) {
      jogadaJogador(tabuleiro, jogador1);
    } else {
      if (modo == 1) {
        jogadaJogador(tabuleiro, jogador2);
      } else {
        jogadaComputador(tabuleiro, jogador2);
      }
    }

    venceu = verificarVitoria(tabuleiro);
    empatou = verificarEmpate(tabuleiro);
    turno = 1 - turno;
  };

  mostrarTabuleiro(tabuleiro);

  if (venceu) {
    if (turno == 1) {
      printf("Parabéns! Jogador 1 venceu.\n");
    } else {
      if (modo == 1) {
        printf("Parabéns! Jogador 2 venceu.\n");
      } else {
        printf("O computador venceu!\n");
      }
    }
  } else {
    printf("Empate!\n");
  }

  return 0;
}
