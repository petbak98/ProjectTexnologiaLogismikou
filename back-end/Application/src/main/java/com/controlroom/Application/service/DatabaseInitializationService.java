//package com.controlroom.Application.service;
//
//import com.controlroom.Application.model.userModel.User;
//import com.controlroom.Application.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
////import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.Database;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.stereotype.Service;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Properties;
//
//@Service
//public class DatabaseInitializationService implements CommandLineRunner {
//
//    @Bean
//    @Autowired(required = true)
//    public EntityManagerFactory entityManagerFactory(DataSource dataSource) {
//        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
//        vendorAdapter.setGenerateDdl(true);
//        vendorAdapter.setShowSql(false);
//        vendorAdapter.setDatabasePlatform("org.hibernate.dialect.MySQLDialect");
//        vendorAdapter.setDatabase(Database.MYSQL);
//
//        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
//        factory.setJpaVendorAdapter(vendorAdapter);
//        factory.setPackagesToScan("pl.com.imralav.library.data.entity");
//        factory.setDataSource(dataSource);
//
//        Properties properties = new Properties();
//        properties.setProperty("hibernate.generate_statistics", "false");
//        properties.setProperty("hibernate.show_sql", "false");
//
//        factory.setJpaProperties(properties);
//
//        factory.afterPropertiesSet();
//
//        return factory.getObject();
//    }
////    private IncidentRepository incidentRepository;
//    private UserRepository userRepository;
////    private Importance importance;
////    private PasswordEncoder passwordEncoder;
//
////    public DatabaseInitializationService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
////        this.userRepository = userRepository;
////        this.passwordEncoder = passwordEncoder;
////    }
//
//    public DatabaseInitializationService(UserRepository userRepository) {
////        this.incidentRepository = incidentRepository;
//        this.userRepository = userRepository;
////        this.importance = importance;
//    }
//
//    @Override
//    public void run(String... args) {
//        // Delete all
//        this.userRepository.deleteAll();
//
//
//        // Create user
////        User admin = new User("admin",passwordEncoder.encode("admin123"),"ADMIN","ACCESS_TEST1,ACCESS_TEST2");
////        User manager = new User("manager",passwordEncoder.encode("manager123"),"MANAGER","ACCESS_TEST1");
//        User testuser = new User("john","12345","USER","");
//
////        Incident Incident1 = new Incident(1,22,"Incident1",null,"city","city6","city7","notes","WARNING","9","10","10","10","10","10","10","10");
//
//        List<User> users = Arrays.asList(testuser);
//        //Importance
////        Importance testimportance = new Importance(1, "WARNNING",incidents);
//
//        // Save to db
//        this.userRepository.saveAll(users);
//    }
//
//}
