//package com.controlroom.Application.security;
//
//import com.controlroom.Application.repository.UserRepository;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import com.controlroom.Application.model.userModel.User;
//
//@Service
//public class UserPrincipalDetailsService implements UserDetailsService {
//    private UserRepository userRepository;
//
//    public UserPrincipalDetailsService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//
//    @Override
//    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
//        User user = this.userRepository.findByUsername(s);
//        UserPrincipal userPrincipal = new UserPrincipal(user);
//
//        return userPrincipal;
//    }
//}
