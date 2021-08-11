--   MYSQL

DROP TABLE demo_job_list;

CREATE TABLE demo_job_list (
    id          INT NOT NULL AUTO_INCREMENT,
    title           VARCHAR(100) NOT NULL,
    company         VARCHAR(100) NOT NULL,
    date_applied    VARCHAR(12) NOT NULL,
    date_denied     VARCHAR(12),
    date_interview  VARCHAR(12),
    reply_info      VARCHAR(300),
    PRIMARY KEY (id)
);

INSERT INTO demo_job_list (title, company, date_applied, date_denied, date_interview, reply_info)
VALUES      ('Job A', 'Company A', '01-03-2021', '03-29-2021', NULL, NULL),
            ('Job B', 'Company B', '02-15-2021', ''          , NULL, NULL),
            ('Job C', 'Company C', '03-02-2021', ''          , NULL, NULL),
            ('Job D', 'Company D', '03-16-2021', '03-30-2021', NULL, NULL),
            ('Job E', 'Company E', '03-16-2021', ''          , NULL, NULL),
            ('Job F', 'Company F', '03-20-2021', '04-01-2021', NULL, NULL),
            ('Job G', 'Company G', '03-28-2021', ''          , NULL, NULL);