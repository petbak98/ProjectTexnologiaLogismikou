//package com.controlroom.Application.service;
//
//import com.controlroom.Application.model.userModel.User;
//import com.controlroom.Application.repository.UserRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Arrays;
//import java.util.List;
//
//@Service
//public class DatabaseInitializationService implements CommandLineRunner {
//    private UserRepository userRepository;
//    private PasswordEncoder passwordEncoder;
//
//    public DatabaseInitializationService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    @Override
//    public void run(String... args) {
//        // Delete all
//        this.userRepository.deleteAll();
//
//        // Crete users
//        User dan = new User("john",passwordEncoder.encode("john123"),"USER","");
//        User admin = new User("admin",passwordEncoder.encode("admin123"),"ADMIN","ACCESS_TEST1,ACCESS_TEST2");
//        User manager = new User("manager",passwordEncoder.encode("manager123"),"MANAGER","ACCESS_TEST1");
//
//        List<User> users = Arrays.asList(dan,admin,manager);
//
//        // Save to db
//        this.userRepository.saveAll(users);
//    }
//}
