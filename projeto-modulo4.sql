-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.28-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para projeto-modulo4
CREATE DATABASE IF NOT EXISTS `projeto-modulo4` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `projeto-modulo4`;

-- Copiando estrutura para procedure projeto-modulo4.DeleteImagem
DELIMITER //
CREATE PROCEDURE `DeleteImagem`(
    IN p_imagem_id INT
)
BEGIN
    -- Deletar um registro existente na tabela 'imagens'
    DELETE FROM imagens WHERE imagem_id = p_imagem_id;
    
    -- O trigger 'after_imagem_delete' será acionado automaticamente após o DELETE
END//
DELIMITER ;

-- Copiando estrutura para procedure projeto-modulo4.DeleteService
DELIMITER //
CREATE PROCEDURE `DeleteService`(
    IN p_service_id INT
)
BEGIN
    -- Deletar um registro existente na tabela 'services'
    DELETE FROM services WHERE service_id = p_service_id;
    
    -- O trigger 'after_service_delete' será acionado automaticamente após o DELETE
END//
DELIMITER ;

-- Copiando estrutura para procedure projeto-modulo4.DeleteUser
DELIMITER //
CREATE PROCEDURE `DeleteUser`(
    IN p_user_id INT
)
BEGIN
    -- Deletar um registro existente na tabela 'users'
    DELETE FROM users WHERE user_id = p_user_id;
    
    -- O trigger 'after_user_delete' será acionado automaticamente após o DELETE
END//
DELIMITER ;

-- Copiando estrutura para tabela projeto-modulo4.imagens
CREATE TABLE IF NOT EXISTS `imagens` (
  `imagem_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_id` int(11) NOT NULL,
  `nome_arquivo` varchar(255) NOT NULL,
  PRIMARY KEY (`imagem_id`),
  KEY `service_id` (`service_id`),
  CONSTRAINT `imagens_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `services` (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para procedure projeto-modulo4.InsertImagem
DELIMITER //
CREATE PROCEDURE `InsertImagem`(
    IN p_service_id INT,
    IN p_nome_arquivo VARCHAR(255)
)
BEGIN
    -- Inserir um novo registro na tabela 'imagens'
    INSERT INTO imagens (service_id, nome_arquivo)
    VALUES (p_service_id, p_nome_arquivo);
    
    -- O trigger 'after_imagem_insert' será acionado automaticamente após o INSERT
END//
DELIMITER ;

-- Copiando estrutura para procedure projeto-modulo4.InsertService
DELIMITER //
CREATE PROCEDURE `InsertService`(
    IN p_user_id INT,
    IN p_titulo VARCHAR(255),
    IN p_descricao TEXT
)
BEGIN
    -- Inserir um novo registro na tabela 'services'
    INSERT INTO services (user_id, titulo, descricao)
    VALUES (p_user_id, p_titulo, p_descricao);
    
    -- O trigger 'after_service_insert' será acionado automaticamente após o INSERT
END//
DELIMITER ;

-- Copiando estrutura para procedure projeto-modulo4.InsertUser
DELIMITER //
CREATE PROCEDURE `InsertUser`(
    IN p_username VARCHAR(255),
    IN p_senha VARCHAR(255),
    IN p_nome VARCHAR(255),
    IN p_email VARCHAR(255)
)
BEGIN
    -- Inserir um novo registro na tabela 'users'
    INSERT INTO users (username, senha, nome, email)
    VALUES (p_username, p_senha, p_nome, p_email);
    
    -- O trigger 'after_user_insert' será acionado automaticamente após o INSERT
END//
DELIMITER ;

-- Copiando estrutura para tabela projeto-modulo4.logs
CREATE TABLE IF NOT EXISTS `logs` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `acao` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `data_cadastro` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela projeto-modulo4.services
CREATE TABLE IF NOT EXISTS `services` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `services_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para procedure projeto-modulo4.UpdateImagem
DELIMITER //
CREATE PROCEDURE `UpdateImagem`(
    IN p_imagem_id INT,
    IN p_service_id INT,
    IN p_nome_arquivo VARCHAR(255)
)
BEGIN
    -- Atualizar um registro existente na tabela 'imagens'
    UPDATE imagens
    SET service_id = p_service_id,
        nome_arquivo = p_nome_arquivo
    WHERE imagem_id = p_imagem_id;
    
    -- O trigger 'after_imagem_update' será acionado automaticamente após o UPDATE
END//
DELIMITER ;

-- Copiando estrutura para procedure projeto-modulo4.UpdateService
DELIMITER //
CREATE PROCEDURE `UpdateService`(
    IN p_service_id INT,
    IN p_user_id INT,
    IN p_titulo VARCHAR(255),
    IN p_descricao TEXT
)
BEGIN
    -- Atualizar um registro existente na tabela 'services'
    UPDATE services
    SET user_id = p_user_id,
        titulo = p_titulo,
        descricao = p_descricao
    WHERE service_id = p_service_id;
    
    -- O trigger 'after_service_update' será acionado automaticamente após o UPDATE
END//
DELIMITER ;

-- Copiando estrutura para procedure projeto-modulo4.UpdateUser
DELIMITER //
CREATE PROCEDURE `UpdateUser`(
    IN p_user_id INT,
    IN p_username VARCHAR(255),
    IN p_senha VARCHAR(255),
    IN p_nome VARCHAR(255),
    IN p_email VARCHAR(255)
)
BEGIN
    -- Atualizar um registro existente na tabela 'users'
    UPDATE users
    SET username = p_username,
        senha = p_senha,
        nome = p_nome,
        email = p_email
    WHERE user_id = p_user_id;
    
    -- O trigger 'after_user_update' será acionado automaticamente após o UPDATE
END//
DELIMITER ;

-- Copiando estrutura para tabela projeto-modulo4.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para trigger projeto-modulo4.after_imagem_delete
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_imagem_delete` AFTER DELETE ON `imagens` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('DELETE FROM imagens WHERE imagem_id = ', OLD.imagem_id, ';');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, OLD.service_id, 'remoção de imagem', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_imagem_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_imagem_insert` AFTER INSERT ON `imagens` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('INSERT INTO imagens (imagem_id, service_id, nome_arquivo) VALUES (', NEW.imagem_id, ', ', NEW.service_id, ', "', NEW.nome_arquivo, '");');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, NEW.service_id, 'cadastro de nova imagem', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_imagem_update
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_imagem_update` AFTER UPDATE ON `imagens` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('UPDATE imagens SET service_id = ', NEW.service_id, ', nome_arquivo = "', NEW.nome_arquivo, '" WHERE imagem_id = ', OLD.imagem_id, ';');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, NEW.service_id, 'atualização de imagem', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_service_delete
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_service_delete` AFTER DELETE ON `services` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('DELETE FROM services WHERE service_id = ', OLD.service_id, ';');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, OLD.user_id, 'remoção de serviço', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_service_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_service_insert` AFTER INSERT ON `services` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('INSERT INTO services (service_id, user_id, titulo, descricao) VALUES (', NEW.service_id, ', ', NEW.user_id, ', "', NEW.titulo, '", "', NEW.descricao, '");');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, NEW.user_id, 'cadastro de novo serviço', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_service_update
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_service_update` AFTER UPDATE ON `services` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('UPDATE services SET user_id = ', NEW.user_id, ', titulo = "', NEW.titulo, '", descricao = "', NEW.descricao, '" WHERE service_id = ', OLD.service_id, ';');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, NEW.user_id, 'atualização de serviço', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_user_delete
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_user_delete` AFTER DELETE ON `users` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('DELETE FROM users WHERE user_id = ', OLD.user_id, ';');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, OLD.user_id, 'remocao de usuario', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_user_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_user_insert` AFTER INSERT ON `users` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('INSERT INTO users (user_id, username, senha, nome, email) VALUES (', NEW.user_id, ', "', NEW.username, '", "', NEW.senha, '", "', NEW.nome, '", "', NEW.email, '");');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, NEW.user_id, 'cadastro de novo usuario', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger projeto-modulo4.after_user_update
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `after_user_update` AFTER UPDATE ON `users` FOR EACH ROW BEGIN
    SET @sqlText = CONCAT('UPDATE users SET username = "', NEW.username, '", senha = "', NEW.senha, '", nome = "', NEW.nome, '", email = "', NEW.email, '" WHERE user_id = ', OLD.user_id, ';');
    INSERT INTO logs (acao, id_user, descricao, data_cadastro)
    VALUES (@sqlText, NEW.user_id, 'atualizacao de usuario', NOW());
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
