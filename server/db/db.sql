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
VALUES      ('Job A', 'Company A', '2021-01-15', '2021-02-15', '2021-01-30', 'lorem ipsum'),
            ('Job B', 'Company B', '2021-01-30', ''          , ''          , ''),
            ('Job C', 'Company C', '2021-02-12', ''          , ''          , ''),
            ('Job D', 'Company D', '2021-03-01', '2021-03-30', ''          , ''),
            ('Job E', 'Company E', '2021-03-16', ''          , '2021-04-01', 'lorem ipsum'),
            ('Job F', 'Company F', '2021-05-10', '2021-05-29', ''          , ''),
            ('Job G', 'Company G', '2021-06-30', ''          , '2021-07-06', 'lorem ipsum');