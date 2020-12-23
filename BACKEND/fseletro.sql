-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 19-Dez-2020 às 19:41
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--
CREATE DATABASE IF NOT EXISTS `fseletro` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `fseletro`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `msg` varchar(300) NOT NULL,
  `data` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(2, 'Rafael Silva Veja', 'teste data base', '2020-10-30 21:17:08'),
(3, 'Rafael Silva Veja', 'teste data base', '2020-10-30 21:23:04'),
(4, 'Rafael Silva Veja', 'teste data base 13', '2020-10-31 01:48:25'),
(5, 'Rafael Silva Veja', 'Teste Bootstrap', '2020-11-06 23:41:08'),
(6, 'Rafael Silva Veja', 'testando', '2020-11-12 23:20:41'),
(7, 'Rafael Silva Veja', 'testando', '2020-11-12 23:21:12'),
(8, 'Rafael Veja', 'testando 2', '2020-11-12 23:21:26'),
(9, 'Rafael Veja', 'testando 2', '2020-11-12 23:22:22'),
(10, 'Rafael Silva Veja', 'testando 3', '2020-11-12 23:22:31'),
(11, 'Rafael Veja', 'testando 4', '2020-11-12 23:22:51'),
(12, 'Rafael Silva Veja', '', '2020-11-14 02:08:39'),
(13, 'Rafael Silva Veja', '', '2020-11-14 02:10:14'),
(14, 'Rafael Veja', 'textarea', '2020-11-14 02:12:34'),
(15, 'Rafael Silva Veja', 'textarea com cantos arredondado', '2020-11-14 02:25:50'),
(16, 'Rafael Veja', 'teste', '2020-11-17 20:05:44'),
(17, 'Rafael Silva Veja', 'teste', '2020-11-17 20:13:44'),
(18, 'Rafael Silva Veja', 'teste', '2020-11-17 20:14:26'),
(19, 'Rafael Silva Veja', 'teste alert', '2020-11-17 20:16:52'),
(20, 'Rafael Silva Veja', 'teste alert Carol', '2020-11-17 20:18:20'),
(21, 'Rafael Silva Veja', 'mensagem teste', '2020-12-18 21:48:13');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `idpedido` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(45) NOT NULL,
  `Estado` varchar(45) DEFAULT NULL,
  `Cidade` varchar(80) DEFAULT NULL,
  `Rua` varchar(200) DEFAULT NULL,
  `Bairro` varchar(200) DEFAULT NULL,
  `CEP` varchar(10) DEFAULT NULL,
  `fk_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  PRIMARY KEY (`idpedido`),
  KEY `fk_pedido_produto_idx` (`fk_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pedido`
--

INSERT INTO `pedido` (`idpedido`, `cliente`, `Estado`, `Cidade`, `Rua`, `Bairro`, `CEP`, `fk_produto`, `quantidade`) VALUES
(1, 'enzo', 'sp', 'sao paulo', '1', '2', '11000000', 5, 2),
(3, 'rafael', 'sp', 'guarulhos', '1', '2', '11000000', 12, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE IF NOT EXISTS `produto` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idproduto`),
  UNIQUE KEY `imagem_UNIQUE` (`imagem`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 'geladeira', 'Geladeira Fross Free Brastemp Side Inverse 540 Litros', '6389.00', '5019.00', 'Geladeira540.jpg'),
(2, 'geladeira', 'Geladeira Frost Free Brastemp 375 litros Branca', '5199.00', '4750.00', 'geladeira375.jpg'),
(3, 'geladeira', 'Geladeira Frost Free Consul Side Prata 340 litros', '3389.00', '2019.00', 'geladeira340.jpg'),
(4, 'fogao', 'Fogao 4 Bocas Consul Inox com Mesa de Vidro', '1200.00', '1129.00', 'fogaoconsul.jpg'),
(5, 'fogao', 'Fogao 4 Bocas Electrolux Bivolt', '1189.00', '1129.00', 'Fogao.jpg'),
(6, 'microondas', 'Micro-ondas Consul 32 litros Inox 220v', '580.00', '409.99', 'microondasconsul.jpg'),
(7, 'microondas', 'Micro-ondas Panasonic 32L Inox', '612.00', '599.00', 'microondaspanasonic.jpg'),
(8, 'microondas', 'Micro-ondas Electrolux 31L', '422.00', '399.00', 'microondaseletro.jpg'),
(9, 'lavaroupas', 'Lavadora de Roupas Brastemp 11kg com Turbo Performance Branca', '1600.00', '1214.00', 'lavadorabrastemp.jpg'),
(10, 'lavaroupas', 'Lavadora de Roupas Brastemp 12Kg com Turbo Performance', '1599.00', '1214.00', 'lavadorabrastempturbo.jpg'),
(11, 'lavalouca', 'Lava Louca Electrolux Inox com 10 Servicos 06 Programas de Lavagem e Painel Blue Touch', '3500.00', '2999.99', 'lavalocaseletro.jpg'),
(12, 'lavalouca', 'Lava-Loucas Brastemp Inox com 14 Servicos, 06 Programas de Lavagem e Funcao Smart Sensor - BLF14AR', '3600.00', '3499.00', 'LavaLoucasBrastemp.jpg');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_pedido_produto` FOREIGN KEY (`fk_produto`) REFERENCES `produto` (`idproduto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
